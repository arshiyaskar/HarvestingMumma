import { useEffect } from 'react';

export default function FireflyCursor() {
  useEffect(() => {
    const fly = document.createElement('div');
    fly.id = 'firefly';
    document.body.appendChild(fly);

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const onMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    document.addEventListener('mousemove', onMove);

    const onDown = () => fly.classList.add('clicking');
    const onUp = () => fly.classList.remove('clicking');
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    const onEnter = (e) => {
      if (['BUTTON', 'A', 'INPUT', 'SELECT'].includes(e.target.tagName))
        fly.classList.add('hovering');
    };
    const onLeave = () => fly.classList.remove('hovering');
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    let raf;
    const animate = () => {
      curX += (mouseX - curX) * 0.15;
      curY += (mouseY - curY) * 0.15;
      fly.style.left = curX + 'px';
      fly.style.top = curY + 'px';
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      if (fly.parentNode) fly.remove();
    };
  }, []);

  return null;
}
