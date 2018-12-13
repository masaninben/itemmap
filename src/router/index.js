import Vue from 'vue'
import Router from 'vue-router'
import MenuList from '@/components/MenuList'
import ProposalCont from '@/components/ProposalCont'
import ItemCont from '@/components/ItemCont'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'ItemCont',
      component: ItemCont
    },
    {
      path: '/ProposalCont',
      name: 'ProposalCont',
      component: ProposalCont
    },
    {
      path: '/ItemCont',
      name: 'ItemCont',
      component: ItemCont
    }
  ]
})
