import './style.css';
import { chapters, postscript } from './chapters';

const titleElement = document.querySelector<HTMLHeadingElement>('#chapter-title')!;
const textElement = document.querySelector<HTMLParagraphElement>('#chapter-text')!;
const postscriptElement = document.querySelector<HTMLParagraphElement>('#postscript')!;
const chapterElement = document.querySelector<HTMLElement>('#chapter')!;
const chapterContent = document.querySelector<HTMLElement>('#chapter-content')!;
const progressList = document.querySelector<HTMLOListElement>('#progress-list')!;
const backButton = document.querySelector<HTMLButtonElement>('#back-button')!;
const nextButton = document.querySelector<HTMLButtonElement>('#next-button')!;

let currentChapter = 0;
let changing = false;
let postscriptTimer: number | undefined;

function buildProgress(): void {
  progressList.replaceChildren();
  chapters.forEach((_, index) => {
	const item = document.createElement('li');
	const segment = document.createElement('span');
	segment.className = 'progress-segment';
	segment.setAttribute('aria-label', `Kapitola ${index + 1}`);
	item.append(segment);
	progressList.append(item);
  });
}

function updateProgress(): void {
  Array.from(progressList.children).forEach((item, index) => {
	const segment = item.firstElementChild as HTMLElement;
	segment.classList.toggle('is-complete', index < currentChapter);
	segment.classList.toggle('is-current', index === currentChapter);
	segment.setAttribute('aria-current', index === currentChapter ? 'step' : 'false');
  });
}

function renderChapter(animate = false): void {
  window.clearTimeout(postscriptTimer);
  const chapter = chapters[currentChapter];

  document.documentElement.dataset.warmth = String(chapter.warmthLevel);
  chapterElement.classList.toggle('is-final', currentChapter === chapters.length - 1);
  titleElement.textContent = chapter.title;
  textElement.textContent = chapter.body;
  postscriptElement.hidden = true;
  postscriptElement.classList.remove('is-visible');
  postscriptElement.textContent = postscript;

  updateProgress();
  backButton.hidden = currentChapter === 0;
  nextButton.textContent = currentChapter === chapters.length - 1
	? 'Ešte raz? 🥰'
	: 'Pokračovať ❤️';

  if (animate) {
	chapterContent.classList.remove('enter');
	void chapterContent.offsetWidth;
	chapterContent.classList.add('enter');
  }

  if (currentChapter === chapters.length - 1) {
	postscriptTimer = window.setTimeout(() => {
	  postscriptElement.hidden = false;
	  requestAnimationFrame(() => postscriptElement.classList.add('is-visible'));
	}, 900);
  }
}

function changeChapter(direction: 1 | -1): void {
  if (changing) return;

  changing = true;
  nextButton.disabled = true;
  backButton.disabled = true;
  chapterContent.classList.remove('enter');
  chapterContent.classList.add('leave');

  window.setTimeout(() => {
	if (direction === 1) {
	  currentChapter = currentChapter === chapters.length - 1 ? 0 : currentChapter + 1;
	} else {
	  currentChapter = Math.max(0, currentChapter - 1);
	}

	renderChapter(true);
	chapterContent.classList.remove('leave');
	nextButton.disabled = false;
	backButton.disabled = false;
	changing = false;

	titleElement.setAttribute('tabindex', '-1');
	titleElement.focus({ preventScroll: true });
  }, 180);
}

buildProgress();
renderChapter();

nextButton.addEventListener('click', () => changeChapter(1));
backButton.addEventListener('click', () => changeChapter(-1));
