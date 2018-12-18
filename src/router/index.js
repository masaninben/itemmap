import Vue from 'vue'
import Router from 'vue-router'
import ItemView from '@/components/ItemView'
import ItemCont from '@/components/ItemCont'
import ItemForm from '@/components/ItemForm'
import ItemImage from '@/components/ItemImage'
import ItemList from '@/components/ItemList'
import ItemMap from '@/components/ItemMap'
import ItemSearch from '@/components/ItemSearch'
import LetGoBtn from '@/components/LetGoBtn'
import ProposalBtn from '@/components/ProposalBtn'
import ProposalCont from '@/components/ProposalCont'
import CategoryList from '@/components/CategoryList'
import BrandList from '@/components/BrandList'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/ProposalCont',
      name: 'ProposalCont',
      component: ProposalCont
    },
    {
      path: '/items/:id',
      name: 'ItemCont',
      component: ItemCont
    }, {
      path: '/ItemForm',
      name: 'ItemForm',
      component: ItemForm
    }, {
      path: '/ItemImage',
      name: 'ItemImage',
      component: ItemImage
    }, {
      path: '/ItemMap',
      name: 'ItemMap',
      component: ItemMap
    }, {
      path: '/ItemSearch',
      name: 'ItemSearch',
      component: ItemSearch
    }, {
      path: '/LetGoBtn',
      name: 'LetGoBtn',
      component: LetGoBtn
    }, {
      path: '/ProposalBtn',
      name: 'ProposalBtn',
      component: ProposalBtn
    }, {
      path: '/ItemView',
      name: 'ItemView',
      component: ItemView
    }, {
      path: '/CategoryList',
      name: 'CategoryList',
      component: CategoryList
    }, {
      path: '/BrandList',
      name: 'BrandList',
      component: BrandList
    }
  ]
})
