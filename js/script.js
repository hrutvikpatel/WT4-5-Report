const goals = [
  {
    title: "Goal 1: Integrative Communication",
    body: "My action plan was to observe how my team communicates to come to a decision and aimed to be open-minded to other's opinions. Over the work term, I learned the importance of communication and soft skills that will help me drive forward in my career. This goal has aided me to approach conversations with an open mind, ask questions often to better understand other's opinions, and find that through asking questions we come to a better conclusion, with team consensus.",
    status: "achieved",
  },
  {
    title: "Goal 2: Problem Solving",
    body: "Throughout the term, I actively observed team processes to find bottlenecks and processes that can be optimized. This goal was achieved because I was able to help my team identify pain points in our test automation that have been slowing down all engineering teams from going to production. We are now working on improving this process.",
    status: "achieved"
  },
  {
    title: "Goal 3: Technological Literacy",
    body: "I requested my team to give me pointers on what I should learn regarding unit testing such that I can improve the quality of code that I ship and reduce potential bugs. I was able to achieve this goal through pair programming since it helped me understand how to write better test cases that start with a clean state and use mocks properly.",
    status: "achieved"
  },
  {
    title: "Goal 4: Leadership",
    body: "Throughout my last term, I planned to focus on figuring out what I needed to do, reach out to the appropriate people for guidance, and have a vision of where the team needs to go. I was able to measure my goal, as I was able to take ownership of team project tasks and guide solution meetings between seniors and external teams. I feel like I have achieved this goal, but I still have room to improve.",
    status: "achieved",
  },
  {
    title: "Goal 5: Personal Learning Goal",
    body: "I needed to focus on other components of development such as code review to become a better developer. Thus I made the effort to take my time when reviewing peer code, to understand every line of code, and if I don't understand something, I requested the developer to go over their changes with me. By the end of my term, I was able to improve the quality of code reviews I did, by taking my time to understand the changes and test them out before approving or leaving a comment on their pull request.",
    status: "achieved"
  },
  {
    title: "Goal 6: Personal Learning Goal",
    body: "",
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