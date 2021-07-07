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

function generateTrashTalk (target) {
  let trashTalk
  if (target.person === 'engineer') {
    trashTalk = '工程師'
    trashTalk += task.engineer[randomIndex(task.engineer)]
    trashTalk += phrase[randomIndex(phrase)]
    trashTalk += '吧？>W<'
    return trashTalk
  }
  if (target.person === 'designer') {
    trashTalk = '設計師'
    trashTalk += task.designer[randomIndex(task.designer)]
    trashTalk += phrase[randomIndex(phrase)]
    trashTalk += '吧？>W<'
    return trashTalk
  }
  if (target.person === 'entrepreneur') {
    trashTalk = '創業家'
    trashTalk += task.entrepreneur[randomIndex(task.entrepreneur)]
    trashTalk += phrase[randomIndex(phrase)]
    trashTalk += '吧？>W<'
    return trashTalk
  }
}

module.exports = generateTrashTalk
