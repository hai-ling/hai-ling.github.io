<script>
    import ExperienceCard from "./experience_elements/ExperienceCard.svelte";

    // Job data

    const jobs = [
        // drdc
        {
            employer: "Defence Research and Development Canada",
            date: "06/2021 - 08/2022",
            role: "Software Engineer Intern",
            description: "Developing a reinforcement learning(RL) training environment for network cyber operations",
            tasks: [
                `Designed a first-of-its-kind unsupervised generation of a simulated RL training environment for network cyber operations using a data-driven approach derived from the emulated environment’s state spaces, helping co-author a research paper`,

                `Assisted in research and design of a cyber attack/defense emulated environment (named CyGIL) as a part of a global contribution to TTCP’s CAGE: Cyber Autonomy Gym for Experimentation`,

                `Designed and developed custom command-line cyber attack/defense abilities`,
            ],
            skills: ['Python','OpenAI Gym', 'Powershell', 'Unix', 'REST']
        },
        {
            employer: "Queen's University",
            date: "09/2019 - 01/2020",
            role: "CS Teaching Assistant",
            description: "Course: Introduction to Computer Programming",
            tasks: [
                `Graded and provided individual feedback on C programming assignments covering concepts such as Object-Oriented Programming, memory allocation, and efficiency of algorithms`,

                `Provided in-person support to students during lab sessions`,
            ],
            skills: ['Object-Oriented Prog.', 'C']
        },
        {
            employer: "Canadian Nuclear Laboratories",
            date: "05/2019 - 08/2019",
            role: "Software Engineer Intern",
            description: "Automation of fire hazard analyses for the CNL’s  Fire Protection department",
            tasks: [
                `Eliminated manual fire hazard analyses for electrical/sprinkler systems by developing internal tools to query existing data and generate hazard reports`,

                `Developed a tool to query and web scrape internal databases to automate per-room risk calculations for 700+ buildings on the reactor site, eliminating a weeklong manual process`,
            ],
            skills: ['VBA','Excel','SQL']
        },
        {
            employer: "Canadian Nuclear Laboratories",
            date: "09/2017 - 01/2018",
            role: "Software Engineer Intern",
            description: "High School SHSM Program",
            tasks: [
                `Developed internal web application interfaces and updated obsolete SQL stored procedures`,
            ],
            skills: []
        },
    ];
</script>

<div id="Experience"  class="flex flex-col max-w-none justify-center">
    {#each jobs as job}
        <ExperienceCard 
        employer = {job.employer}
        date = {job.date}
        role = {job.role}
        description = {job.description}
        tasks = {job.tasks}
        skills = {job.skills}
        />
    {/each}
    
</div>
