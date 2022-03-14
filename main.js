window.onload = function() {
  // URLパラメータ文字列を取得する
  const param = location.search;
  // カスタムURLスキーム
  let url = 'youtube://' + param; 
  location.href = url;
}
