import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
function getImg(el) {
  return el.querySelector('img[data-role=loading]');
}
function createImg() {
  const img = document.createElement('img');
  img.dataset.role = 'loading';
  img.src = loadingUrl;
  img.className = styles.loading;
  return img
}
export default function(el,binding) {
  const curImg = getImg(el);
  if(binding.value) {
    if(!curImg) {
      const img = createImg();
      el.appendChild(img);
    }
  }else {
    if(curImg) {
      curImg.remove();
    }
  }
}