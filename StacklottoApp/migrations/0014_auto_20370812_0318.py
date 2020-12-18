# Generated by Django 2.0.6 on 2037-08-12 03:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('StacklottoApp', '0013_auto_20370812_0139'),
    ]

    operations = [
        migrations.RenameField(
            model_name='agentmodel',
            old_name='agent_code',
            new_name='code',
        ),
        migrations.RenameField(
            model_name='agentmodel',
            old_name='agent_location',
            new_name='location',
        ),
        migrations.RenameField(
            model_name='agentmodel',
            old_name='agent_status',
            new_name='status',
        ),
        migrations.AddField(
            model_name='usermodel',
            name='referee',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='refferals', to='StacklottoApp.AffiliateModel'),
        ),
    ]