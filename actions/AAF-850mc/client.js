function(properties, context) {

    const CopyToClipboard = (containerid) => {

        var doc = document
        , text = doc.getElementById(containerid)
        , range, selection;
        

        if (doc.body.createTextRange)
        {
            range = doc.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } 

        else if (window.getSelection)
        {
            selection = window.getSelection();        
            range = doc.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }

    CopyToClipboard(`${properties.element_id}`)
}