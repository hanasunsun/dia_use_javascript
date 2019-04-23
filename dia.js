// 引数は何段のひし形を使うかであり、引数は奇数ではなくても動きはするが計算の都合上
// 奇数であることが好ましい

// 全体から半分をトリガーとして上向き,下向きのピラミッドを重ねる方法
// ピラミッドに使うアスタリスクの数は行数に関係した奇数となる
// 1行目の時は1,2行目の時は3,3行目の時は5と(行数)*2-1となる。
// そして空白行の数は、全部で10段のピラミッドを作成する場合を仮定して考えると
// 1行目の時は、4個,2行目の時は3個,3行目の時は2個と(行数/2)-1の値となる。
// 以上のコードを記述するこのによって上向きのピラミッドを作成することが可能であり、
// 後は、そのコードを少しいじることによって、下向きのピラミッドを記述することができる。
function dia1(n){
	for(var i = 1; i <= parseInt(n/2)+1;i++){
		for(var j = 1; j <= (parseInt(n/2)+1)-i;j++){
			document.write(" - ");
		}
		for(j = 0; j < i*2-1; j++){
			document.write(" * ");
		}
		document.write("<br>");
	}
	for(i = parseInt(n/2); i > 0; i--){
		for(j = (parseInt(n/2)+1)-i; j > 0; j--){
			document.write(" - ");
		}
		for(j = 0; j < i*2-1; j++){
			document.write(" * ");
		}
		document.write("<br>");
	}
}

// 先ほどの定理通りであれば、空白の数,アスタリスクの数は、中心からの距離の絶対値で同じ値となる。
// その法則を用いてひし形を表示する。
function dia2(n){
	for(var i = 0; i < n; i++){
		for(var j = 1; j <= n; j++){
			if(j <= Math.abs(parseInt(n/2)-i) || j > n - Math.abs(parseInt(n/2)-i)){
				document.write(" - ");
			}else{
				document.write(" * ");
			}
		}
		document.write("<br>");
	}
}


document.write("単純に繰り返しで行う。<br>")
dia1(9);
document.write("<br><br>");

document.write("絶対値を用いて行う。<br>");
dia2(9);