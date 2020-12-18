from django.db import models

class AgentModel(models.Model):
    AGENT_APPLIED = "AA",
    AGENT_CONFIRMED = "AC"
    AGENT_NOT_APPLIED = "ANA"

    AGENT_STATUS = (
        (AGENT_NOT_APPLIED, "Not Applied"),
        (AGENT_APPLIED, "Applied"),
        (AGENT_CONFIRMED, "Confirmed"),
    )

    user = models.OneToOneField("UserModel", on_delete=models.CASCADE)
    status = models.CharField(max_length=3, choices=AGENT_STATUS, default=AGENT_NOT_APPLIED)
    code = models.CharField(max_length=50, null=True, blank=True)
    location = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user.get_username()

    @property
    def dict(self):
        return {
            "status": self.get_status_display(),
            "code": self.code,
            "location": self.location,
        }

    class Meta:
        verbose_name = "Agent"
        verbose_name_plural = "Agents"

    