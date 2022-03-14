window.onload = function() {
  // URLパラメータ文字列を取得する
  const beforeParam = location.search;
  const afterParam = beforeParam.replace("q=https://youtu.be/", "");
  
  // カスタムURLスキーム
  let url = 'javascript:location.protocol="youtube:' + afterParam; 
  location.href = url;
  
  window.alert(url)
}
