$(document).ready(function() {
    $('#password').keyup(function() {
    $('#result').html(checkStrength($('#password').val()))
    })
    function checkStrength(password) {
    var strength = 0
    if (password.length < 8) {
    $('#result').removeClass()
    $('#result').addClass('short')
    return '短すぎます'
    }
    if (password.length > 12) {
        $('#result').removeClass()
        $('#result').addClass('long')
        return '長すぎます'
        }
    if (password.length > 7) strength += 1
    // If password contains both lower and uppercase characters, increase strength value.
    // パスワードに小文字と大文字の両方が含まれる場合は、強度の値を上げてください。
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
    // If it has numbers and characters, increase strength value.
    // 数字や文字がある場合は、強度値を上げる。
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
    
    // // If it has one special character, increase strength value.
    // // 特殊文字が1つでもあれば、強度値を上げる。
    // if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // // If it has two special characters, increase strength value.
    // // 特殊文字が2つある場合は、強度値を上げる。
    // if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

    // Calculated strength value, we can return messages
    // 算出された強度値から、メッセージを返すことができる
    // If value is less than 2
    // 値が2未満の場合
    if (strength < 2) {
    $('#result').removeClass()
    $('#result').addClass('Weak')
    return '弱いパスワードです'
    } else if (strength == 2) {
    $('#result').removeClass()
    $('#result').addClass('good')
    return '良'
    } else {
    $('#result').removeClass()
    $('#result').addClass('strong')
    return '強力なパスワードです'
    }
    }
    });