# Ask MYSverse knowledge operations

The MYSverse Wiki contributes all 208 public Markdown pages to the OpenAI vector store shared with `mysverse/landing`. Each indexed file has deterministic `source_repo`, `source_key`, `locale`, `title`, `canonical_url`, `content_hash`, `game`, and `needs_review` attributes. The assistant uses these attributes for locale filtering and citation links.

## Configuration and routine sync

Add repository secrets `OPENAI_INGEST_API_KEY` and `OPENAI_VECTOR_STORE_ID`. Use the same vector-store ID as the landing repository but a project-scoped ingestion credential, separate from the landing runtime key.

After a Wiki document reaches `main`, `.github/workflows/sync-assistant-knowledge.yml` runs the complete `pnpm run verify` gate before syncing. The script uploads only added or changed pages, waits until replacements are indexed, then removes old or stale files. It reconciles only files whose `source_repo` is `wiki`, so it cannot delete landing documents.

Preview changes locally without writing:

```bash
OPENAI_INGEST_API_KEY=... OPENAI_VECTOR_STORE_ID=... node scripts/sync-assistant-knowledge.mjs --dry-run
```

Run `node scripts/sync-assistant-knowledge.mjs --validate` to validate all local metadata and document counts without credentials or network access.

Remove `--dry-run` for a manual reconciliation. The vector store is initially created from the landing repository runbook. Generated output, images, source code, private data, and external websites are never indexed.

## Recovery

If upload or indexing fails, rerun the workflow. Existing files remain because stale deletion starts only after all replacements have indexed successfully. If incorrect content was indexed, revert the source document, pass `pnpm run verify`, and rerun the sync. Do not delete or recreate the shared vector store as a repository-local recovery step.

The Wiki widget loads the shared assistant iframe from `https://mysver.se`. For a non-production assistant host, build with `VITE_ASSISTANT_ORIGIN`. Production availability follows the landing app’s `ASSISTANT_ENABLED` status endpoint.
