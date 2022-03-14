window.onload = function() {
  // URLパラメータ文字列を取得する
  const beforeParam = location.search;
  const afterParam = beforeParam.replace("https://youtu.be/", "");
  
  // カスタムURLスキーム
  let url = 'youtube://youtube.com/' + param; 
  location.href = url;
  
  document.write(url)
}
