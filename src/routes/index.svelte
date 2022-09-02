<script>
import Layout from "./__layout.svelte";
import Typewriter from 'svelte-typewriter'
import About from '../components/about.svelte'
import Nav from '../components/nav.svelte'
import Experience from '../components/experience.svelte'
import Projects from '../components/projects.svelte'
import Intro from '../components/intro.svelte'
let max_width = 1366
</script>

<div class='flex justify-center px-0'>
    <div class='max-w-7xl px-0'>
        <Nav></Nav>
        <Intro id="Intro"></Intro>
        <About id="About"></About>
        <div class="divider">EXPERIENCE</div>
        <Experience id="Experience"></Experience>
        <div class="divider">PROJECTS</div>
        <Projects id='Projects'></Projects>
    </div>
</div>

