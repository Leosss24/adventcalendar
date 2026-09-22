ALTER TABLE `doors` ADD `media_type` text DEFAULT 'none' NOT NULL;--> statement-breakpoint
ALTER TABLE `doors` ADD `media_url` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `doors` ADD `link_url` text DEFAULT '' NOT NULL;