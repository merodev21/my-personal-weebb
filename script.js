// انتظر حتى يتم تحميل الصفحة بالكامل
window.addEventListener('load', function() {
    // حدد زر التعريف من أنا بواسطة الـ ID الخاص به
    var button = document.getElementById('navigateButton');
    // حدد القسم الذي تريد التمرير إليه بواسطة الـ ID الخاص به
    var section = document.getElementById('navigateSection');

    // أضف استماع للنقر على الزر
    button.addEventListener('click', function() {
        // قم بالتمرير إلى القسم المحدد بنعومة
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
