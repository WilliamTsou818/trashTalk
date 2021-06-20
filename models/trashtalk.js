const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function randomIndex (array) {
  const index = Math.floor(Math.random() * array.length)
  return index
}

function generateTrashtalk (target) {
  let trashtalk
  if (target.engineer === 'on') {
    trashtalk = '工程師'
    trashtalk += task.engineer[randomIndex(task.engineer)]
    trashtalk += phrase[randomIndex(phrase)]
    trashtalk += '吧？>W<'
    return trashtalk
  }
  if (target.designer === 'on') {
    trashtalk = '設計師'
    trashtalk += task.designer[randomIndex(task.designer)]
    trashtalk += phrase[randomIndex(phrase)]
    trashtalk += '吧？>W<'
    return trashtalk
  }
  if (target.entrepreneur === 'on') {
    trashtalk = '創業家'
    trashtalk += task.entrepreneur[randomIndex(task.entrepreneur)]
    trashtalk += phrase[randomIndex(phrase)]
    trashtalk += '吧？>W<'
    return trashtalk
  }
}

module.exports = generateTrashtalk
