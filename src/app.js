import 'babel-polyfill'
import './assets/style/base.css'
import './assets/style/common.css'
import './assets/style/index.scss'
import './assets/style/aa.less'
import './assets/style/stylus.styl'
import _ from 'loadsh'
import sum from './vendor/sum'
import img from './assets/imgs/t-jd.png'
import test from './assets/js/1.js'
import sss from './public/sss'

console.log(_)
console.log(sss)
test()
console.log('11111111111sum(1, 2) = ', sum(1, 2))



$('div').addClass('new')
$('.img').attr('src', img)
$('.public').attr('src', './public/t-kaola.png')

/** 在development中, 才能正常运行( 通过proxy ) */
if (process.env.NODE_ENV === 'development') {
  $.get(
    '/comments/hotflow',
    {
      id: '4263554020904293',
      mid: '4263554020904293',
      max_id_type: '0'
    },
    function(data) {
      console.log(data)
    }
  )
} else {
  console.log(`开发模式下才能测试 '代理功能'aaa `)
}
