import Icon from "@/components/Icon";
import getComponentRootDom from "./getComponentRootDom";
import styles from "./showMessage.module.less";
/**
 *
 * @param {String} content
 * @param {String} type
 * @param {HTMLElement} container
 * @param {Number} duration
 */
export default function(options) {
  const content = options.content || '';
  const container = options.container || document.body;
  const type = options.type || 'info';
  const duration = options.duration || 2000;
  const div = document.createElement('div');
  const iconDom = getComponentRootDom(Icon,{type})
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  const classname = styles[`message-${type}`];
  div.className = `${styles.message} ${classname}`;
  if(options.container) {
    if(getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
  }
  container.appendChild(div);
  div.clientHeight;
  div.style.opacity = 1;
  div.style.transform = 'translate(-50%,-50%)';
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
    div.addEventListener('transitionend',() => {
      div.remove();
      options.callback && options.callback();
    })
  },duration)
}