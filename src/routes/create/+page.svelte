<script lang="ts">
	import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    import { Label, Input, Button, Checkbox, A } from 'flowbite-svelte';

    export let data: PageData;
</script>

<div class="mb-6">
    				 <form use:enhance method="POST">
					<fieldset class="form-group">
						 <Input
							class="form-control form-control-lg"
							name="name"
							type="text"
							required
							placeholder="Spot Name"
						/>
					</fieldset>
					<fieldset class="form-group">
						<Input
							class="form-control form-control-lg"
							name="latitude"
							type="number"
							required
							placeholder="Latitude"
						/>
					</fieldset>
					<fieldset class="form-group">
						<Input
							class="form-control form-control-lg"
							name="longitude"
							type="number"
							required
							placeholder="Longitude"
						/>
					</fieldset>
					<Button class="btn btn-lg btn-primary pull-xs-right" type='submit'>Sign up</Button>
				</form>
</div>
