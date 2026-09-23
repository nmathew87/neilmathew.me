---
title: Changing my relationship with code
description: On relearning how to enjoy building things
publishDate: 2026-09-22
draft: true
---
For most of this year, I’ve been complaining about vibe coding. Not because it doesn’t work. Quite the opposite. It works annoyingly well.

The thing I’ve been struggling with is that AI has taken away one of the parts of coding I actually loved: getting stuck. That sounds stupid when I write it out, but I mean it.

A lot of the joy of programming, at least for me, came from having some idea in my head, trying to build it, and then inevitably running into a wall. Something wouldn’t work. I wouldn’t understand why. I’d spend hours going through old forum posts, weird GitHub issues, documentation from 2017, someone’s blog with twelve readers, testing things, breaking things, slowly building a mental model of whatever little corner of computing I had accidentally fallen into.

Sometimes this would take an entire day. And then, eventually, it would work. Man, that feeling was good. There was this huge dopamine hit from solving something that had resisted you for hours. You understood the thing now. You had earned it somehow.

There was another side effect that I didn’t really appreciate until it started disappearing: while trying to solve one problem, you’d find ten other things. You’d stumble into someone’s obscure blog, learn about some library you’d never heard of, discover that three people had been arguing about the exact same problem for six years. You’d come out knowing more than you needed to know.

Building software felt implicitly collaborative because the internet was full of traces left behind by other people solving their own problems.

Now I mostly ask the machine. And it solves it. Or if it doesn’t, the agent tries another thing, and another thing, and another thing. Eventually it usually gets there and moves on.

The cost of solving a coding problem has collapsed. Which is obviously incredible, but it also made me enjoy coding less.

For a while I thought this meant AI had removed the craft from programming. If there’s no struggle, no deep problem solving, no spending eight hours trying to understand some ridiculous issue, then what exactly am I getting good at? Worse, what can I actually claim as mine?

There used to be a kind of implied proof of work in complexity. If someone showed you a crazy graphics engine, or an audio editor, or some technically intricate project, part of your reaction was simply: holy shit, you built that? You understood the amount of human labor encoded in the thing.

That connection is basically gone. You can build something absurdly complicated in a weekend now. And when I do, I sometimes have this weird feeling where I don’t even want to say “I built this.”

Did I?

I asked for it. I made a bunch of decisions. I kept changing things. I threw away half of what the AI produced. But I definitely didn’t write most of it.

So if complexity isn’t impressive anymore, and typing the code isn’t really the work anymore, what is? What’s the proof of work?

I think I’ve been using the wrong definition of work. The problems worth attaching my identity to have moved up a level.

## The idea

We’ve spent years saying ideas are cheap and execution is everything. Historically that was mostly right, because execution was expensive. You could have a hundred ideas, but if each one took six months and a team of engineers to test, who cares.

That changes when you can build roughly at the speed you can think. I don’t think this means ideas suddenly matter more than execution. Most ideas are still bad. Mine included. But the distance between having an idea and finding out whether it’s any good has collapsed.

You can have a thought in the morning and be using the thing by lunch. Once you use it, you get another idea. You change it. That change makes you notice something else, so you build that too. Suddenly you have this loop of idea → prototype → react → new idea → prototype again, and that loop can run all day.

I think that’s starting to replace the old dopamine loop for me. It’s less hard problem → struggle → struggle → finally solve it, and more idea → holy shit it works → wait, what if we did this instead?

That shortened loop between imagination and reality is incredibly addictive. And I think it rewards a different kind of person: someone who has a lot of ideas, who is curious, who can look at some new model capability and immediately think of ten weird things to do with it, who understands enough different domains to combine things in ways that aren’t obvious.

Basically, a high-energy idea machine.

## Taste

The second thing I care much more about now is taste. There’s a lot of talk about vibe coding, and increasingly vibe design, but I still think bold, genuinely good design requires taste.

AI can give you twenty options. Taste is knowing that nineteen of them suck.

And something interesting happens when the cost of implementation becomes almost zero: taste becomes executable.

In the past, I could look at a product and think, this interaction should work differently, but changing it might mean writing a spec, opening Figma, getting engineering time, implementing it, QAing it, realizing it still feels wrong, and doing the whole thing again. A huge amount of taste never got expressed because there was too much friction between the thought and the result.

Now I can have a reaction and immediately turn that reaction into software. Nah, this feels wrong. Move this here. Make that animation slower. What if the whole interaction worked the other way around? Okay, show me.

Design and implementation start collapsing into the same activity. Because the feedback loop is so tight, you also get way more reps. You’re not just designing faster. You’re making far more design decisions than you used to.

That feels like a craft too.

## Domain knowledge

The third thing I’ve started using as a measure of good work is whether the project changed me.

We recently built an audio engine for Dex, basically a digital audio workstation inside the browser. Before starting, I knew embarrassingly little about sound engineering. By the end, we were talking about digital signal processing, frequency-domain analysis, compressors, reverb, delay, wet/dry mixes, audio routing and a whole bunch of things I had never really understood before.

Of course we used AI to learn all of it. That doesn’t bother me. The important bit is that I came out the other side knowing something I didn’t know before.

There’s this rule in storytelling that a character arc isn’t really complete unless the character is changed by what happened. Maybe software projects should work the same way.

Every good project should change you.

The old version of coding almost forced this to happen. You had to understand things because otherwise you couldn’t get past the problem in front of you. AI makes it possible to skip that, which is both amazing and a little dangerous.

You can now build twenty things and come out exactly the same person. You can become incredibly productive while becoming intellectually static. So maybe learning has to become more deliberate now. You have to choose to go deeper even when the machine doesn’t force you to.

## Systems thinking

The fourth thing is systems thinking. AI is very good at solving the problem directly in front of it, but someone still has to think about the shape of the whole thing.

What decision am I making today that I’ll regret six months from now? Where should this abstraction live? What are we optimizing for? What happens when this system is ten times larger? What should the machine decide, and what should I decide?

The implementation details increasingly feel cheap. The decisions feel expensive.

## Judgment

That gets to maybe the biggest shift in how I think about proof of work now: when implementation becomes abundant, judgment becomes scarce.

The interesting question is no longer just can you build it? Almost anything can be built. The more interesting questions are why this, why this way, why now, why did you remove that feature, why does this thing feel different from the obvious version everyone else would have made?

Those decisions are much more interesting to me now than how difficult the code was.

There’s also something here around ownership that I’m still figuring out. Maybe I didn’t author every line anymore, but I can still own the work.

A film director didn’t operate every camera, sew every costume, compose every note, build every set, or act every role. Yet it would be strange to say they didn’t make the film.

Maybe ownership in software is moving from authorship to accountability. Did my fingers type these characters? Increasingly, no. Would this thing exist, in this form, without me? That feels like a much better question.

And am I willing to stand behind it? That might be the real one.

## Momentum

There’s still something I miss about the old way. I miss getting completely lost in some stupid technical problem. I miss finally cracking it at 1am. I miss feeling like I personally wrestled the computer into submission. That was fun, and I don’t think I need to convince myself otherwise.

But I’m starting to think I was confusing that particular kind of struggle with the craft itself.

The craft hasn’t disappeared. It moved.

Ideas. Taste. Judgment. Domain knowledge. Systems thinking. And maybe the biggest one is momentum.

The old way of building had these heroic moments. You’d disappear into a cave for three days and emerge with something working. Those moments felt incredible, but they were also a pretty inconsistent way to build.

Now the work feels less heroic and much more continuous. Have an idea, make it, look at it, change it, learn something, ship it, and come back tomorrow. There’s less drama in it, but maybe there’s more stamina.

And I think that’s partly what I want this blog to be about too.

I’ve always been bad at sharing work because I felt like I needed to wait until I had something sufficiently finished or impressive to talk about. But if building is becoming more continuous, maybe sharing should be too.

So I want to use this place to share more of the projects I’m working on, the weird little ideas I’m testing, things I’m learning, and probably plenty of things that don’t work.

Less proof of work as “look how hard this was.” More proof that I’m still making things.