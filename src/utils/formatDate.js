export default function(time,detail = false) {
  const date = new Date(+time);
  const month = (date.getMonth() + 1).toString().padStart(2,"0");
  const day = date.getDay().toString().padStart(2,"0");
  if(detail) {
    const hour = date.getHours().toString().padStart(2,"0");
    const minute = date.getMinutes().toString().padStart(2,"0");
    const second = date.getSeconds().toString().padStart(2,"0");
    return `${date.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`
  }
  return `${date.getFullYear()}-${month}-${day}`
}