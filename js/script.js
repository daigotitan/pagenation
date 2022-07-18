// 要素を定義
const e_nav = document.querySelector('header nav');
const e_button = document.querySelector('header p.button');
const a_links = document.querySelectorAll('a[href^="#"]');
const e_pageNation = document.querySelector('main nav');
const a_pageNations = e_pageNation.querySelectorAll('a');
// 固定ヘッダー分の高さ
const gap = 50;


const SEC2_HEIGHT = 0;

// ボタンを押したらナビの表示を切り替える
e_button.addEventListener('click', () => {
  displayNavi();
},false);

// ナビの表示を切り替える関数
const displayNavi = () => {
  if(e_button.classList.contains('open')){
    e_button.classList.remove('open');
    e_nav.classList.remove('open');
  }
  else{
    e_button.classList.add('open');
    e_nav.classList.add('open');
  }
}

// <a>要素の配列内で繰り返す
a_links.forEach((value) => {
  // 配列内の各要素を value としてクリックされた時にリンク先にスクロールさせる
  value.addEventListener('click', (e) => {
    // デフォルトの<a>のリンクをキャンセルさせる
    e.preventDefault();
    // 各a要素のリンク先を取得
    let href = value.getAttribute('href');
    // リンク先の要素（コンテンツ）を取得
    let e_target = document.getElementById(href.replace('#', ''));
    // ブラウザからの高さを取得
    const rect = e_target.getBoundingClientRect().top;
    // 現在のスクロール量を取得
    const offset = window.pageYOffset;

    //最終的な位置を割り出す
    const target = rect + offset - gap;
    console.log('rect : '+ rect);
    console.log('offset : '+ offset);
    // スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
    // ボタンとナビのactiveを解除
    e_button.classList.remove('open');
    e_nav.classList.remove('open');
  });
});


window.addEventListener('load', () => {
  f_pageNation();
},false);

window.addEventListener('scroll', () => {
  f_pageNation();
},false);

window.addEventListener('resize', () => {
  f_pageNation();
},false);


const f_pageNation = () =>{
  const pageY = window.pageYOffset;
  const sec1Top = document.querySelector('#section1').getBoundingClientRect().top;
  const sec2Top = document.querySelector('#section2').getBoundingClientRect().top;
  const sec3Top = document.querySelector('#section3').getBoundingClientRect().top;
  const sec4Top = document.querySelector('#section4').getBoundingClientRect().top;
  const sec5Top = document.querySelector('#section5').getBoundingClientRect().top;
  console.log('pageY : '+ pageY);
  console.log('sec1Top : '+ sec1Top);
  console.log('sec2Top : '+ sec2Top);
  console.log('sec3Top : '+ sec3Top);
  console.log('sec4Top : '+ sec4Top);
  console.log('sec5Top : '+ sec5Top);
  console.log('window.outerHeight : '+ window.outerHeight);
  a_pageNations.forEach(value => {
    value.classList.remove('active');
  });
  if(sec2Top > gap){
    a_pageNations[0].classList.add('active');
  }
  else if(sec3Top > gap){
    a_pageNations[1].classList.add('active');
  }
  else if(sec4Top > gap){
    a_pageNations[2].classList.add('active');
  }
  else if(sec5Top > gap){
    a_pageNations[3].classList.add('active');
  }
  else{
    a_pageNations[4].classList.add('active');
  }
  e_pageNation.style.top = window.pageYOffset + (window.outerHeight / 2 ) - 100 +'px';

}