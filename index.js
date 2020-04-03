const path = require('path')

const fs = require('fs')

function load(dir, cb) {
    const url = path.resolve(__dirname, dir)
    const files = fs.readdirSync(url)
    files.forEach(fileName => {
        fileName = fileName.replace('.js', '')
        const file = require(url + '/' + fileName)
        cb(fileName,file)
    })
}


// 加载所有的类和方法

function loadMore() {
    let model = {}
    load('./source', function(fileName, file) {
        fileName = fileName.replace(fileName[0],fileName[0].toUpperCase());
        model[fileName] = file
    })

    console.log(model)
    return model
}

module.exports = loadMore()




