CREATE TABLE `orders` (
	`id` text PRIMARY KEY NOT NULL,
	`request_key` text NOT NULL,
	`customer` text NOT NULL,
	`phone` text NOT NULL,
	`address` text NOT NULL,
	`method` text NOT NULL,
	`items` text NOT NULL,
	`total` integer NOT NULL,
	`status` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `orders_request_key_unique` ON `orders` (`request_key`);--> statement-breakpoint
CREATE TABLE `products` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`category` text NOT NULL,
	`description` text NOT NULL,
	`price` integer NOT NULL,
	`image` text NOT NULL,
	`active` integer DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
