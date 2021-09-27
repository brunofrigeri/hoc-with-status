## Introduction
Code done with Expo Bare Workflow (React Native). The main goal of this repository was create a `withStatus` HOC that could be used for multiple files. With that in mint, I use Context API to help me solve this.

## The problem to solve
My problem was having the same Status Modal been rendered in different screens. The first workaround was to create a Screen just for Statuses, and them navigate to it once we have a Status, but didn't work as expected.

## What was done
My though was using a HOC to wrap all my screens and then, use a Context to open/close the modal, and decide about each options based on what the current component sends.

## Article
This [article](https://www.brunofrigeri.com/blog/global-status-modal-hoc-en) was written by me.
