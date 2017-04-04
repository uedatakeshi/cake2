<?php $this->Html->script('jquery.min', array('inline' => false));?>
<?php $this->Html->script('upload', array('inline' => false));?>
<div class="users form">
<?php echo $this->Form->create('User', array('type' => 'file')); ?>
	<fieldset>
		<legend><?php echo __('Add User'); ?></legend>
	<?php
        echo $this->Form->hidden('webroot', array('value' => $this->webroot));
		echo $this->Form->input('username');
		echo $this->Form->input('password');
		echo $this->Form->input('name');
		echo $this->Form->input('email');
		echo $this->Form->input('role');
		echo $this->Form->input('status');
        echo $this->Form->input('User.photo', array('type' => 'file'));
        echo $this->Form->input('User.photo_dir', array('type' => 'hidden'));
	?>
        <input class="myupload" type="file" name="files[0]" data-key="0" data-url="<?php echo $this->Html->url('/uploads/add/bimage', true);?>"><span class="mydelete" data-key="0" data-url="<?php echo $this->Html->url('/uploads/del/bimage', true);?>">X</span>
<div class="myimage"><img id="preview0" width="50" height="50" src=""></div>
<?php
        echo $this->Form->hidden('Bimage.0.id');
        echo $this->Form->input('Bimage.0.img_no', array('value' => 1));
        echo $this->Form->input('Bimage.0.temp_path');
        echo $this->Form->input('Bimage.0.img_name');
        echo $this->Form->input('Bimage.0.img_dir');
        echo $this->Form->input('Bimage.0.temp_img');
        echo $this->Form->input('Bimage.0.temp_img_m');
        echo $this->Form->input('Bimage.0.temp_img_s');
?>
	</fieldset>
<?php echo $this->Form->end(__('Submit')); ?>
</div>
<div class="actions">
	<h3><?php echo __('Actions'); ?></h3>
	<ul>

		<li><?php echo $this->Html->link(__('List Users'), array('action' => 'index')); ?></li>
	</ul>
</div>
