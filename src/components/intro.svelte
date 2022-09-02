<script>
    const socials = [
        {
            btn_name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/hai-ling-rao/'
        },
        {
            btn_name: 'GitHub',
            link: 'https://github.com/hai-ling'
        },
    ]
</script>
<div class="hero min-h-screen bg-base-200 mx-0">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold transition-opacity"><span class="text-primary">Hi!</span> I'm <span class="text-secondary">Hai.</span></h1>
        <p class="py-6">Hi! My name is Hai-Ling, and I'm a 4th-year Computer Engineering student at Queen's University, with aspirations to become a Software Engineer.</p>
        <p class="text-accent">Now looking for 2023 opportunities!</p>
        <div class='flex flex-row justify-center'>
            {#each socials as social}
            <button class='btn btn-ghost m-2' onclick="window.location.href='{social.link}';">{social.btn_name}</button>
            {/each}
        </div>
        <button onclick="window.location.href='/#About';" class="btn btn-primary m-4">About Me!</button>
      </div>
    </div>
  </div>