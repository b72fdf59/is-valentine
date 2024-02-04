<script lang="ts">
	let isValentine = false;
	let fontSize = "1em";

	let handleNo = () => {
		fontSize = parseFloat(fontSize) + 1 + "em"; // Increment fontSize by 1
	};

	let handleYes = () => {
		isValentine = true;
	};

	let hearts = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));
</script>
<main>
	<div class="container">
		<div class="content">
			{#if isValentine}
				<h1>Yayyyyyyy! Love you bb! 😍</h1>
			{:else}
				<div class="emoji">
					<img src="valentine.gif" alt="Plankton getting a heart" />
				</div>
				<h1>Will you be my valentine?</h1>
				<div class="btn-row">
					<div class="btn-yes">
						<button
							style="font-size: {fontSize}"
							on:click={handleYes}>Yes</button
						>
					</div>
					<div class="btn-no">
						<button on:click={handleNo}>No</button>
					</div>
				</div>
			{/if}
		</div>

		{#each hearts as heart (heart.id)}
			<div
				class="heart"
				style="left: {heart.x}%; top: {heart.y}%;"
			>
				❤️
			</div>
		{/each}
	</div>
</main>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100vh;
	}

	.content {
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		background-color: white;
	}

	.btn-row {
		display: flex;
		justify-content: space-between;
	}

	.btn-yes button {
		background-color: green;
		color: white;
		border-radius: 5px;
	}

	.btn-no button {
		background-color: red;
		color: white;
		border-radius: 5px;
	}

	.emoji {
		font-size: 5em;
	}

	.heart {
		position: absolute;
		animation: float 5s infinite;
	}

	@keyframes float {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>