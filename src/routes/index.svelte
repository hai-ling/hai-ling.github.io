<script>
import Layout from "./__layout.svelte";
import Typewriter from 'svelte-typewriter'
import Hello from '../components/hello.svelte'
import NavBar from '../components/nav.svelte'
import Experience from '../components/experience.svelte'
import Projects from '../components/projects.svelte'
let max_width = 1366
</script>

<div class='flex justify-center'>
    <div class='max-w-7xl px-7'>
        <NavBar></NavBar>
        <div class="divider"></div>
        <Hello></Hello>
        <div class="divider">EXPERIENCE</div>
        <Experience></Experience>
        <div class="divider">PROJECTS</div>
        <Projects></Projects>
    </div>
</div>

