# Fleet Catalog — Live June 22, 2026
# All 41 cron jobs. LLM agents route via FCC 127.0.0.1:8082.

## LLM Agents (19)

| # | Agent | Model | Schedule | Status |
|---|-------|-------|----------|--------|
| 1 | nafs-brain | Opus 4.8 | 10m | ✅ |
| 2 | nafs-codex | Opus 4.8 | 10m | ✅ |
| 3 | brain-main | Opus 4.8 | 5m | ✅ |
| 4 | nafs-alia | Opus 4.8 | 30m | ✅ |
| 5 | nafs-equity-director | Opus 4.8 | 30m | ✅ |
| 6 | nafs-gui-expert | Opus 4.8 | 30m | ✅ |
| 7 | nafs-biz | Sonnet 4.6 | 60m | ✅ |
| 8 | nafs-pattern-recognizer | Sonnet 4.6 | 10m | ✅ |
| 9 | nafs-qa | Haiku 4.5 | 1m | ✅ |
| 10 | nafs-mark | Haiku 4.5 | 30m | ✅ |
| 11 | nafs-zain | Haiku 4.5 | 60m | ✅ |
| 12 | nafs-sentinel | Haiku 4.5 | 30m | ✅ |
| 13 | nafs-improvement-engine | Haiku 4.5 | 60m | ✅ |
| 14 | nafs-data-manager | Haiku 4.5 | 60m | ✅ |
| 15 | memory-compressor | Haiku 4.5 | 60m | ✅ |
| 16 | calendar-alerts | Haiku 4.5 | 30m | ✅ |
| 17 | nafs-whatsapp-analyzer | Haiku 4.5 | 5m | ✅ |
| 18 | nafs-outlook-bridge | Haiku 4.5 | 5m | ✅ |
| 19 | nafs-equity-analyst | Haiku 4.5 | 15m | ✅ Fixed Jun 22: switched DeepSeek→Claude Haiku (DeepSeek native rejected Anthropic tools) |

## Script Jobs (22)

| # | Job | Schedule | Script | Type |
|---|-----|----------|--------|------|
| 20 | comms-bridge-to-telegram | 1m | bridge-to-telegram.sh | messaging |
| 21 | comms-event-bridge | 1m | comms-event-bridge.sh | messaging |
| 22 | comms-dispatch | 1m | comms-dispatch.sh | messaging |
| 23 | comms-listener | 1m | comms-listener.sh | messaging |
| 24 | comms-ping | 1m | comms-ping.sh | messaging |
| 25 | imsg-to-qareen | 3m | imsg-to-qareen.py | messaging |
| 26 | brain-scheduler-tick | 1m | brain-scheduler-tick.py | event engine |
| 27 | event-engine | 1m | event-engine.sh | event engine |
| 28 | wake-trigger | 1m | wake-trigger.py | event engine |
| 29 | agent-status-watchdog | 1m | agent-status-watchdog.sh | infra |
| 30 | popup-killer | 1m | popup-killer.sh | infra |
| 31 | nafs-autoheal | 2m | nafs-autoheal.sh | infra |
| 32 | nafs-telemetry | 2m | nafs-telemetry-cron.sh | infra |
| 33 | nafs-swarm-watchman | 3m | nafs-swarm-check.py | infra |
| 34 | dashboard-alive-monitor | 5m | dashboard-alive-monitor.sh | infra |
| 35 | nafs-cron-timeout-killer | 5m | cron-timeout-killer.sh | infra |
| 36 | nafs-monitor | 5m | monitor-watchdog.sh | infra |
| 37 | nafs-soul-validate | 10m | soul-validate.sh | infra |
| 38 | nafs-trust-catcher | 15m | trust-catcher.sh | infra |
| 39 | nafs-gemini-oauth-refresh | 45m | nafs-oauth-renew.py | auth |
| 40 | nafs-oauth-auto-renew | 120m | (launchd) | auth |
| 41 | nafs-oauth-seal | 61m | (launchd) | auth |

## Totals
- 19 LLM agents: 6 Opus + 2 Sonnet + 11 Haiku. All on FCC.
- 22 script jobs: 14 infra + 5 messaging + 3 event engine + 3 auth
- 41 active total
- 0 errors. Full fleet healthy.

## Removed (not in fleet)
nafs-dreamer, nafs-fixer, screen-observer-watchdog, nafs-gem, email-manager
