install:
	npm install

publish:
	npm publish --dry-run

start:
	npx babel-node src/bin/gendiff.js

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage

test:
	npm test

test-coverage:
	npm run test-coverage
