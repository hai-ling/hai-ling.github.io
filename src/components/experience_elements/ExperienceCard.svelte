<script>
    export let employer = 'DefaultEmployer'
    export let date = 'mm/dd/yyy - mm/dd/yyy'
    export let role = 'Default Role'
    export let description = 'DefaultDescription'
    export let tasks = ['task1','task2,','task3']
    export let skills = []
</script>

<div tabindex="0" class="collapse collapse-plus bg-base-100 w-full">
    <input type="checkbox" checked/> 
    <div class="collapse-title text-xl font-medium">
        <div class="flex flex-col justify-between md:flex-row">
            {employer}
            <span class="text-md font-thin">{date}</span>
        </div>
    </div>
    <div class="collapse-content">
        <div class='prose max-w-none'>
            <h4><em> {role}</em></h4>
            -> | {description}
            <ul>
                {#each tasks as task}
                    <li>{task}</li>
                {/each}
            </ul>
        </div>
        <div class="flex flex-wrap justify-center">
            {#each skills as skill}
                <div class="badge badge-accent m-2 overflow-hidden">{skill}</div>
            {/each}
        </div>
    </div>
</div>