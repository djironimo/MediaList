$(document).ready(function () {
	var template = $("#media-template").html();
	var json = readJson().array;
	var	compiled_html = _.template(template)({
			data: json
		});
	$("body").append(compiled_html);
});

var imageID="#image-template";
	audioID="#audio-template";
	videoID="#video-template";
	errorID="#error-template";

function showTemplate (data) {
	if (data.type == "image") {
		return mediaTemplate (data.name, imageID);
	} else if (data.type == "audio") {
		return mediaTemplate (data.name, audioID);
	} else if (data.type == "video") {
		return mediaTemplate (data.name, videoID);
	} else {
		return mediaTemplate (data.name, errorID);
	}
}

function mediaTemplate (name, id) {
	var temp = $(id).html();
	var compiled = _.template(temp)({
		data: name
	});
	return compiled;
}

function getIcon (data) {
	if (data.type == "image") {
		return "<i class='fa fa-file-image-o ico'></i>";
	} else if (data.type == "audio") {
		return "<i class='fa fa-file-audio-o ico'></i>";
	} else if (data.type == "video") {
		return "<i class='fa fa-file-video-o ico'></i>";
	} else {
		return "<i class='fa fa-file-o ico'></i>";
	}
}