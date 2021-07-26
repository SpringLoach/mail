<template>
  <div class="category"> 
    <nav-bar class="cate-nav"><span slot="center">商品分类</span></nav-bar>
    <div class="cate-content">
      <tab-menu :categories="categories" @selectItem="selectItem"/>
      <scroll class="scroll" ref="scroll">
        <tab-content-category :sub-categories="showSubcategory"/>
        <tab-control :titles="['流行', '新品', '热售']" @tabClick="tabClick" ref="tabControl"/>
        <goods-list :goods="showCategoryDetail"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'

import NavBar from 'components/commom/navbar/NavBar'
import Scroll from 'components/commom/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getCategory, getSubcategory, getCategoryDetail} from 'network/category'

export default {
  components: {
    Scroll,
    NavBar,
    TabMenu,
    TabContentCategory,
    TabControl,
    GoodsList
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      currentType: 'pop'
    }
  },
  created() {
    this._getCategory()
  },
  computed: {
    showSubcategory() {
      /* 一开始未请求到数据时，赋值空对象 */
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  activated() {
    this.$bus.$on('itemImageLoad', () => {
      this.$refs.scroll.scroll.refresh();
    })
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        // 1.获取分类数据
		    this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 3.请求第一个分类的数据
         this._getSubcategories(0)
      })
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        // 第一步获取组件 TabContentCategory 需要的数据  
        this.categoryData[index].subcategories = res.data
        // 赋值给自己，使vue检测到对象改变  
        this.categoryData = {...this.categoryData}
        this._getCategoryDetail('pop')
        this._getCategoryDetail('sell')
        this._getCategoryDetail('new')
      })
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    // 点击的切换回调，改变索引/类别后传给子组件的数据也不同了  
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    selectItem(index) {
        this.currentType = 'pop';
        this.$refs.tabControl.currentIndex = 0;
        this._getSubcategories(index);
    }
  }
}
</script>

<style scoped>
.category {
  background-color: #fff;
}
.cate-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 11;
}
.cate-content {
  height: calc(100vh - 44px - 49px);
  display: flex;
}
.scroll {
  height: 100%;
  width: 75%;
}
</style>