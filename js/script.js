const goals = [
  {
    title: "Goal 1: Integrative Communication",
    body: "	I now approach conversations with an open mind and often ask questions to better understand other's opinions and often find that through questions we come to a better conclusion that has a team concensus.",
    status: "achieved",
  },
  {
    title: "Goal 2: Depth & Breadth of Understanding",
    body: "As a Platform team, our goal is to build tools that internal teams can utilize to make their work easier. I knew about the basics of what and how to use Authentication and Authorization, but I had no idea how to build a library around it. As my primary focus became to work on fixing Hubspot integration bugs, it became hard to research about the auth library. I, however, was able to gain some knowledge on it by taking up testing tasks on the auth library that my team built.",
    status: "failed"
  },
  {
    title: "Goal 3: Personal Learning Goal",
    body: "As a developer, knowing how to use git is crucial. I knew the basics of how to use git to commit and pull changes. But I was never comfortable with how to revert changes on my branch, changing the base branch, and any other technical tasks that required careful maneuvering because you can easily mess up the codebase in the repo. I overcame this discomfort by researching git solutions to the above issues and carefully reading each command and what it does, before blindly doing them. Over the work term, I had to rebase, revert code multiple times, and by carefully solving them with the help of Google and my mentor I was able to gain confidence in using git.",
    status: "achieved"
  },
];

$(function () {

  $("#exampleModal").on('show.bs.modal', function (event) {
    const card = $(event.relatedTarget);
    const id = card.data('modal-id');
    const modal = $(this);
    const { status, title, body } = goals[Number(id)];

    const modalTitle = document.getElementById("modal-status");
    modalTitle.classList.remove('failed');
    modalTitle.classList.remove('achieved');
    modalTitle.classList.add(status);

    modal.find('.modal-title').text(title);
    modal.find('.modal-body').text(body);
  });
});