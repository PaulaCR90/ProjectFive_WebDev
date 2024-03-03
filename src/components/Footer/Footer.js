import { FooterInfo } from '../../sources/sources';
import './Footer.css';

export const createFooter = () => {
  const footer$$ = document.createElement('footer');
  const h3$$ = document.createElement('h3');
  h3$$.textContent = '© Created by PaulaCR';
  const ul$$ = document.createElement('ul');
  FooterInfo.forEach((element) => {
    const li$$ = document.createElement('li');
    const a$$ = document.createElement('a');
    a$$.href = element.mediaHref;
    a$$.target = '_blank';
    const img$$ = document.createElement('img');
    img$$.src = element.mediaSrc;
    img$$.className = 'mediaImages';
    a$$.appendChild(img$$);
    li$$.appendChild(a$$);
    ul$$.appendChild(li$$);
  });
  footer$$.appendChild(h3$$);
  footer$$.appendChild(ul$$);
  return footer$$;
};
