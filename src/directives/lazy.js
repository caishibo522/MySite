import eventBus from "@/eventBus";
import imgUrl from "@/assets/default.gif";
import {debounce} from "../utils";

let imgs = [];
function setImg(img) {
  img.dom.src = imgUrl;
  const rect = img.dom.getBoundingClientRect();
  const clientHeight = document.documentElement.clientHeight;
  const height = rect.height || 150;
  if(rect.top >= -height && rect.top <= clientHeight) {
      img.dom.src = img.src;
    imgs = imgs.filter(i => i !== img)
  }
}

function setImgs() {
  for(let img of imgs) {
    setImg(img)
  }
}
function handleScroll(dom) {
  setImgs();
}
eventBus.$on('mainScroll',debounce(handleScroll,50))
export default {
  inserted(el,binding){
    const img  = {
      dom:el,
      src:binding.value,
    }
    imgs.push(img)
    setImg(img);
  },
  unbind(el) {
    imgs = imgs.filter(img => img.dom !== el)
  }
}