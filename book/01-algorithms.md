<h1>
<a name="chapter1" class="anchor" href="#chapter1"><span class="octicon octicon-link"></span></a>Chapter 1 - Algorithms</h1>

_In this chapter we discuss what is an algorithm, time complexity, storage complexity and provide a few examples of algorithms._

## What is an algorithm?

Let's first start with a discussion of what an algorithm is. Intuitively the definition is more or less clear, we are talking about some formal way to describe a computational procedure. According to the Merriam-Webster dictionary algorithm is "a set of steps that are followed in order to solve a mathematical problem or to complete a computer process".

Still this is probably not formal enough. How do we choose the next steps from the set of steps? Should we stop eventually? What is the result of an execution of an algorithm? There can be given many formal definitions of what constitutes an algorithm, however, at this point in the book, without introducing the abstract models of computation and what computation is, we will just give the following definition.

<div class="highlighted">
<div class="definition-term">Algorithm</div>
Set of computational steps which specifies a formal computational procedure and has the following properties:
<ol class="lower-alpha">
  <li>After each step is completed the next step is unambiguously defined or the algorithm stops its execution if there are no more steps left</li>
  <li>It is defined on a set of inputs and for each input it stops after a finite number of steps</li>
  <li>When it stops it produces a result which we call its output</li>
  <li>Its steps and their order of execution can be formally and unambiguously specified using some language or notation</li>
</ol>
</div>
<div class="artefact-label" href="#1.1">1.1 - Algorithm</div>

~~~~ {.javascript .numberLines}
var x = 1;
var y = x + 1;
~~~~

$$M^\bot = \{ f \in V' : f(m) = 0 \mbox{ for all } m \in M \}.$$