$(document).ready(function () {
    // Show the modal on click
    $('#addSubChecklist').on('click', function () {
        $('#addSubChecklistModal').modal('show');
    });

    // Save the new sub-checklist item
    $('#saveSubChecklist').on('click', function () {
        var newItem = $('#subChecklistInput').val().trim();
        if (newItem !== '') {
            var newListItem = `
          <li class="list-group-item border-0 d-flex justify-content-between align-items-center py-0 bg-transparent text-muted">
            <div class="text-truncate d-flex align-items-center justify-content-start me-2">
              <input class="accent-blue me-2" type="checkbox" value="" />
              <label class="form-check-label text-truncate">${newItem}</label>
            </div>
            <span class="cursor-pointer delete-btn">
              <i class="fa-regular fa-trash-can cursor-pointer"></i>
            </span>
          </li>`;
            $('#checklist').prepend(newListItem);
            $('#addSubChecklistModal').modal('hide');
            $('#subChecklistInput').val('');
        }
    });

    //____ delete sub heading _____
    $('#checklist').on('click', '.delete-btn', function () {
        $(this).closest('.list-group-item').remove();
    });


  
});