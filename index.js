function genrateTable () {
  if (document.getElementById('parentDiv')) {
    document.getElementById('parentDiv').remove();
  }
  // if block end

  let parentDiv = document.createElement('div');
  parentDiv.id = 'parentDiv';
  document.body.append(parentDiv);

  let v = parseInt(document.getElementById('box').value);

  if (isNaN(v)) {
    alert("Error: Only numbers accepted !");
  } else {
    for (let i = 1; i<=10; i++) {
      let e = document.createElement('div');
      e.textContent = `${v} x ${i} = ${v*i}`;
      parentDiv.append(e);
    }
    // for loop end
  }
  // else block end
}
// function end


document.getElementById('btn_1').addEventListener('click', genrateTable);
