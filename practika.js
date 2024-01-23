$(document).ready(function() {
    // Додавання нового завдання
    $('#add-task-btn').click(function() {
      var taskText = $('#new-task').val();
      if (taskText !== '') {
        $('.todo-list').append('<li>' + taskText + '<span class="cancel-btn">Відмінити</span></li>');
        $('#new-task').val('');
      }
    });

    // Відміна завдання
    $('.todo-list').on('click', '.cancel-btn', function() {
      $(this).parent('li').remove();
    });

    // Позначення завдання як виконаного
    $('.todo-list').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });