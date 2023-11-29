function func1()
{
    alert
    (
        " The summary of this page:" + "\n" + 
        "In this blog i will be mentioning why and how experts become sucessful as well as the best practices into becoming a good expert."
    );
}

function func2()
{
    alert
    (
        " The summary of this page:" + "\n" +
        "* Being open minded allows for a more extensive learning process." + "\n" + 
        "* Professionals that fail usually end up being more close minded when wrong which stifles thier knowledge" + "\n" + 
        "* When openmindedness is achieved then a person is able to be a reliable expert with opinions about  "
    );
}

function func3()
{
    alert
    (
        " The summary of this page:" + "\n" +
        "*Flaws are part of human nature allowing one to grow and learn from mistakes" + "\n" +
        "*When humans are wrong they do not admit to faults and then are unversed in the right answer" + "\n" +
        "*Their overall professional credibility is then questioned and they become less reliable"
    );


}

function size_works_cited()
{
    var size_change = document.getElementById("credits_text");

    size_change.style.width = "auto";

    size_change.style.height = "auto";
}

window.onload()
{
    size_works_cited();
}
