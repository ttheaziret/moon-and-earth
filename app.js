const absoluteBlock = document.querySelector('.absolute');
const circle = document.querySelector('.circle');

function moveBlock() {
  const relativeBlock = absoluteBlock.parentNode;
  const { width: relativeWidth, height: relativeHeight } = relativeBlock.getBoundingClientRect();
  const { width: absoluteWidth, height: absoluteHeight } = absoluteBlock.getBoundingClientRect();
  
  const maxX = relativeWidth - absoluteWidth;
  const maxY = relativeHeight - absoluteHeight;
  const radius = circle.getBoundingClientRect().width / 2;
  
  let { top, left } = absoluteBlock.getBoundingClientRect();
  top -= relativeBlock.getBoundingClientRect().top;
  left -= relativeBlock.getBoundingClientRect().left;
  
  const angle = (Date.now() / 1000) * Math.PI * 2 / 5;
  const x = Math.sin(angle) * radius + radius - absoluteWidth / 2;
  const y = Math.cos(angle) * radius + radius - absoluteHeight / 2;
  
  absoluteBlock.style.top = `${y}px`;
  absoluteBlock.style.left = `${x}px`;
  
  setTimeout(moveBlock, 50);
}

moveBlock();
