function ajax(options) {
    let defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function () {},
        error: function () {}
    }
    Object.assign(defaults, options)
    let xhr = new XMLHttpRequest()
    let params = ''
    for (attr in defaults.data) {
        params += attr + '=' + defaults.data[attr] + '&'
    }
    params = params.substr(0, params.length - 1)
    if (defaults.type == 'get') {
        defaults.url += '?' + params
    }
    xhr.open(defaults.type, defaults.url)
    if (defaults.type == 'post') {
        let contentType = defaults.header['Content-Type']
        xhr.setRequestHeader('Content-Type', contentType)
        if (contentType == 'application/json') {
            xhr.send(JSON.stringify(defaults.data))
        }
        xhr.send(params)
    } else {
        xhr.send()
    }
    xhr.onload = function () {
        let text = xhr.responseText
        let contentType = xhr.getResponseHeader('content-type')
        if (contentType.includes('application/json')) {
            text = JSON.parse(text)
        }
        if (xhr.status == 200) {
            defaults.success(text, xhr)
        } else {
            defaults.error(text, xhr)
        }
        xhr.onerror = function () {
            defaults.error(xhr)
        }
    }
}


function requestAjax() {
    let xhr = null
    let url = ''
    let data = {

    }
    let header = {

    }
    let type = 'GET'
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject()
    }
    // 处理参数
    let paramStr = getParams(data)
    url = type.toUpperCase() == 'GET' ? url + '?' + paramStr : url;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {

        }
    }
    xhr.onerror = function () {

    }
    xhr.open(type, url, true)
    if (type.toUpperCase() == 'GET') {
        xhr.send()
    } else {
        Object.keys(header).forEach((item, index) => {
            xhr.setRequestHeader(item, header[item])
        })
        if (header['content-type'] == 'application/json' || header['ContentType'] == 'application/json') {
            xhr.send(JSON.stringify(data))
        } else {
            xhr.send(paramStr)
        }
    }

}

function getParams(data) {
    let paramStr = ''
    let obj = data || {}
    for (let key in obj) {
        if (obj[key]) {
            paramStr += key + '=' + obj[key] + '&'
        }
    }
    return paramStr.substring(0, paramStr.length - 1)
}