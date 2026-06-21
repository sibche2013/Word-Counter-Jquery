/* Developed by Amin Arjmand
Email: aminarj2000@gmail.com | Site: aminarjmand.com | GitHub: @sibche2013 
*/

$(document).ready(function () {
    var textbox = $('#textbox');
    var cards = $('.counter-card span');

    textbox.focus();

    textbox.on('input', function () {
        var text = $(this).val();
        
        // Auto-detect RTL/LTR for Persian/English typing
        var isPersian = /[\u0600-\u06FF]/.test(text);
        $(this).css('direction', isPersian ? 'rtl' : 'ltr');

        if (text.length === 0) {
            cards.eq(0).text(0); // Words
            cards.eq(1).text(0); // Lines
            cards.eq(2).text(0); // Chars with space
            cards.eq(3).text(0); // Chars no space
            return;
        }

        // Calculations
        var charWithSpace = text.length;
        var charNoSpace = text.replace(/\s+/g, '').length;
        
        var wordsMatch = text.trim().match(/\S+/g);
        var words = wordsMatch ? wordsMatch.length : 0;
        
        var lines = text.split(/\n/).length;

        // Update UI
        cards.eq(0).text(words);
        cards.eq(1).text(lines);
        cards.eq(2).text(charWithSpace);
        cards.eq(3).text(charNoSpace);
    });
});
