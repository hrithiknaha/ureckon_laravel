
function submitted(e) {
    console.log("submitted")
}
var members = ["Sayan", "Somsubhra", "Raja", "Baja", "Khaja"],
    isSignedUp = !0,
    loggedInUser = "username",
    events = {
        roborace: 5,
        robowar: 5,
        robosoccer: 5,
        roborumble: 5,
        bridgemaking: 3,
        getsetsell: 4,
        admaking: 4,
        spyder: 2,
        codegolf: 2,
        coderanch: 2,
        pubg: 4,
        cluex: 2,
        uic: 5,
        techquiz: 2,
        linefollower: 4,
        aerostorm: 5,
        nfs: 1,
        fifa: 1,
        csgo: 5,
        urecathon: 4,
        armofhercules: 4,
        debugging: 2,
        solvero: 4,
        biotex: 4,
        healthybites: 4
    },
    idName = "",
    count = 1;
document.getElementById("registrationform").addEventListener("submit", submitted),
    function(e) {
        "use strict";

        function t(t) {
            if ("email" == e(t).attr("type") || "email" == e(t).attr("name")) {
                if (null == e(t).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)) return !1
            } else if ("" == e(t).val().trim()) return !1
        }

        function d(t) {
            var d = e(t).parent();
            e(d).addClass("alert-validate"), e(d).append('<span class="btn-hide-validate"><i class="fas fa-times"></i></span>'), e(".btn-hide-validate").each(function() {
                e(this).on("click", function() {
                    n(this)
                })
            })
        }

        function n(t) {
            var d = e(t).parent();
            e(d).removeClass("alert-validate"), e(d).find(".btn-hide-validate").remove()
        }
        e(".validate-input .input100").each(function() {
            e(this).on("blur", function() {
                0 == t(this) ? d(this) : e(this).parent().addClass("true-validate")
            })
        });
        var m = e(".validate-input .input100");
        e(".validate-form").on("submit", function() {
            for (var e = !0, n = 0; n < m.length; n++) 0 == t(m[n]) && (d(m[n]), e = !1);
            return e
        }), e(".validate-form .input100").each(function() {
            e(this).focus(function() {
                n(this), e(this).parent().removeClass("true-validate")
            })
        }), e(".btn-hide-contact100").on("click", function() {
            return isSignedUp ? (document.getElementById("member2").style.display = "none", document.getElementById("member3").style.display = "none", document.getElementById("member4").style.display = "none", document.getElementById("member5").style.display = "none", count = 1, idName = "", e(".container-contact100").fadeOut(300), void e("#signed").animate({
                top: "200px"
            })) : (e(".container-contact100").fadeOut(300), void e("#notSigned").animate({
                top: "200px"
            }))
        }), e(".btn-show-contact100").on("click", function() {
            isSignedUp ? (e("#member1 #email").val(loggedInUser), e("#member1").css("opacity", .5), document.getElementById("member2").style.display = "none", document.getElementById("member3").style.display = "none", document.getElementById("member4").style.display = "none", document.getElementById("member5").style.display = "none", document.getElementById("addmember").style.display = "block", document.getElementById("delmember").style.display = "block", document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0, count = 1, idName = "", e(".container-contact100").css("top", "0.1%"), e(".container-contact100").fadeIn(300), e(".container-contact100").css("visibility", "visible"), e("#signed").animate({
                top: "0px"
            })) : (notSignedUp(), e(".container-contact100").css("top", "0.1%"), e(".container-contact100").fadeIn(300), e(".container-contact100").css("visibility", "visible"), e("#notSigned").animate({
                top: "0px"
            }))
        })
    }(jQuery), $("#roborace").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Need For Torque - NFT"), $("#addmember").off().on("click", function() {
        count <= events.roborace && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.roborace && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.roborace && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.roborace && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#robowar").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Robo Dangal"), $("#addmember").off().on("click", function() {
        count <= events.robowar && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.robowar && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.robowar && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.robowar && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#robosoccer").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Robo League"), $("#addmember").off().on("click", function() {
        count <= events.robosoccer && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.robosoccer && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.robosoccer && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.robosoccer && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#roborumble").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Robo Rumble"), $("#addmember").off().on("click", function() {
        count <= events.roborumble && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.roborumble && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.roborumble && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.roborumble && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#linefollower").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Dirrecion"), $("#addmember").off().on("click", function() {
        count <= events.linefollower && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.linefollower && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.linefollower && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.linefollower && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#coderanch").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Code Ranch"), $("#addmember").off().on("click", function() {
        count <= events.coderanch && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.coderanch && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.coderanch && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.coderanch && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#codegolf").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Code Golf"), $("#addmember").off().on("click", function() {
        count <= events.codegolf && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.codegolf && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.codegolf && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.codegolf && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#spyder").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Spyder"), $("#addmember").off().on("click", function() {
        count <= events.spyder && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.spyder && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.spyder && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.spyder && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#debugging").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Debugger"), $("#addmember").off().on("click", function() {
        count <= events.debugging && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.debugging && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.debugging && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.debugging && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#pubg").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For PUBG"), $("#addmember").off().on("click", function() {
        count <= events.pubg && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.pubg && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.pubg && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.pubg && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#pubgem").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For PUBG"), $("#addmember").off().on("click", function() {
        count <= events.pubg && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.pubg && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.pubg && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.pubg && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#csgo").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Counter Strike: GO/1.6"), $("#addmember").off().on("click", function() {
        count <= events.csgo && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.csgo && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.csgo && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.csgo && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#nfs").on("click", function() {
    return document.getElementById("addmember").style.display = "none", document.getElementById("delmember").style.display = "none", isSignedUp ? void $(".contact100-form-title span").text("Register For NFS: Most Wanted") : void notSignedUp()
}), $("#fifa").on("click", function() {
    return document.getElementById("addmember").style.display = "none", document.getElementById("delmember").style.display = "none", isSignedUp ? void $(".contact100-form-title span").text("Register For FIFA") : void notSignedUp()
}), $("#bridgemaking").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Bridge Making"), $("#addmember").off().on("click", function() {
        count <= events.bridgemaking && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.bridgemaking && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.bridgemaking && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.bridgemaking && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#armofhercules").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Arm Of Hercules"), $("#addmember").off().on("click", function() {
        count <= events.armofhercules && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.armofhercules && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.armofhercules && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.armofhercules && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#aerostorm").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For AeroStorm"), $("#addmember").off().on("click", function() {
        count <= events.aerostorm && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.aerostorm && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.aerostorm && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.aerostorm && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#uic").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Ureckon Innovation Challenge - UIC"), $("#addmember").off().on("click", function() {
        count <= events.uic && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.uic && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.uic && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.uic && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#urecathon").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Ureck-A-Thon"), $("#addmember").off().on("click", function() {
        count <= events.urecathon && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.urecathon && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.urecathon && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.urecathon && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#getsetsell").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Get Set Sell"), $("#addmember").off().on("click", function() {
        count <= events.getsetsell && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.getsetsell && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.getsetsell && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.getsetsell && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#admaking").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Ad mad"), $("#addmember").off().on("click", function() {
        count <= events.admaking && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.admaking && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.admaking && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.admaking && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#solvero").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Solvero"), $("#addmember").off().on("click", function() {
        count <= events.solvero && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.solvero && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.solvero && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.solvero && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#biotex").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For BioteXpression"), $("#addmember").off().on("click", function() {
        count <= events.biotex && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.biotex && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.biotex && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.biotex && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#healthybites").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Healthy Bites"), $("#addmember").off().on("click", function() {
        count <= events.solvero && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.healthybites && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.healthybites && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.healthybites && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#cluex").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For ClueX"), $("#addmember").off().on("click", function() {
        count <= events.cluex && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.cluex && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.cluex && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.cluex && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#techquiz").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For ThinkTech"), $("#addmember").off().on("click", function() {
        count <= events.techquiz && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.techquiz && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.techquiz && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.techquiz && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
});
var substringMatcher = function(e) {
    return function(t, d) {
        var n;
        n = [], substrRegex = new RegExp(t, "i"), $.each(e, function(e, t) {
            substrRegex.test(t) && n.push(t)
        }), d(n)
    }
};
$("#the-basics .typeahead").typeahead({
    hint: !1,
    highlight: !0,
    minLength: 1
}, {
    name: "states",
    source: substringMatcher(members)
});
function submitted(e) {
    console.log("submitted")
}
var members = ["Sayan", "Somsubhra", "Raja", "Baja", "Khaja"],
    isSignedUp = !0,
    loggedInUser = "username",
    events = {
        roborace: 5,
        robowar: 5,
        robosoccer: 5,
        roborumble: 5,
        bridgemaking: 3,
        getsetsell: 4,
        admaking: 4,
        spyder: 2,
        codegolf: 2,
        coderanch: 2,
        pubg: 4,
        cluex: 2,
        uic: 5,
        techquiz: 2,
        linefollower: 4,
        aerostorm: 5,
        nfs: 1,
        fifa: 1,
        csgo: 5,
        urecathon: 4,
        armofhercules: 4,
        debugging: 2,
        solvero: 4,
        biotex: 4,
        healthybites: 4
    },
    idName = "",
    count = 1;
document.getElementById("registrationform").addEventListener("submit", submitted),
    function(e) {
        "use strict";

        function t(t) {
            if ("email" == e(t).attr("type") || "email" == e(t).attr("name")) {
                if (null == e(t).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)) return !1
            } else if ("" == e(t).val().trim()) return !1
        }

        function d(t) {
            var d = e(t).parent();
            e(d).addClass("alert-validate"), e(d).append('<span class="btn-hide-validate"><i class="fas fa-times"></i></span>'), e(".btn-hide-validate").each(function() {
                e(this).on("click", function() {
                    n(this)
                })
            })
        }

        function n(t) {
            var d = e(t).parent();
            e(d).removeClass("alert-validate"), e(d).find(".btn-hide-validate").remove()
        }
        e(".validate-input .input100").each(function() {
            e(this).on("blur", function() {
                0 == t(this) ? d(this) : e(this).parent().addClass("true-validate")
            })
        });
        var m = e(".validate-input .input100");
        e(".validate-form").on("submit", function() {
            for (var e = !0, n = 0; n < m.length; n++) 0 == t(m[n]) && (d(m[n]), e = !1);
            return e
        }), e(".validate-form .input100").each(function() {
            e(this).focus(function() {
                n(this), e(this).parent().removeClass("true-validate")
            })
        }), e(".btn-hide-contact100").on("click", function() {
            return isSignedUp ? (document.getElementById("member2").style.display = "none", document.getElementById("member3").style.display = "none", document.getElementById("member4").style.display = "none", document.getElementById("member5").style.display = "none", count = 1, idName = "", e(".container-contact100").fadeOut(300), void e("#signed").animate({
                top: "200px"
            })) : (e(".container-contact100").fadeOut(300), void e("#notSigned").animate({
                top: "200px"
            }))
        }), e(".btn-show-contact100").on("click", function() {
            isSignedUp ? (e("#member1 #email").val(loggedInUser), e("#member1").css("opacity", .5), document.getElementById("member2").style.display = "none", document.getElementById("member3").style.display = "none", document.getElementById("member4").style.display = "none", document.getElementById("member5").style.display = "none", document.getElementById("addmember").style.display = "block", document.getElementById("delmember").style.display = "block", document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0, count = 1, idName = "", e(".container-contact100").css("top", "0.1%"), e(".container-contact100").fadeIn(300), e(".container-contact100").css("visibility", "visible"), e("#signed").animate({
                top: "0px"
            })) : (notSignedUp(), e(".container-contact100").css("top", "0.1%"), e(".container-contact100").fadeIn(300), e(".container-contact100").css("visibility", "visible"), e("#notSigned").animate({
                top: "0px"
            }))
        })
    }(jQuery), $("#roborace").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Need For Torque - NFT"), $("#addmember").off().on("click", function() {
        count <= events.roborace && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.roborace && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.roborace && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.roborace && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#robowar").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Robo Dangal"), $("#addmember").off().on("click", function() {
        count <= events.robowar && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.robowar && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.robowar && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.robowar && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#robosoccer").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Robo League"), $("#addmember").off().on("click", function() {
        count <= events.robosoccer && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.robosoccer && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.robosoccer && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.robosoccer && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#roborumble").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Robo Rumble"), $("#addmember").off().on("click", function() {
        count <= events.roborumble && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.roborumble && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.roborumble && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.roborumble && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#linefollower").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Dirrecion"), $("#addmember").off().on("click", function() {
        count <= events.linefollower && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.linefollower && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.linefollower && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.linefollower && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#coderanch").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Code Ranch"), $("#addmember").off().on("click", function() {
        count <= events.coderanch && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.coderanch && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.coderanch && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.coderanch && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#codegolf").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Code Golf"), $("#addmember").off().on("click", function() {
        count <= events.codegolf && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.codegolf && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.codegolf && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.codegolf && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#spyder").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Spyder"), $("#addmember").off().on("click", function() {
        count <= events.spyder && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.spyder && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.spyder && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.spyder && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#debugging").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Debugger"), $("#addmember").off().on("click", function() {
        count <= events.debugging && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.debugging && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.debugging && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.debugging && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#pubg").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For PUBG"), $("#addmember").off().on("click", function() {
        count <= events.pubg && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.pubg && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.pubg && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.pubg && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#pubgem").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For PUBG"), $("#addmember").off().on("click", function() {
        count <= events.pubg && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.pubg && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.pubg && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.pubg && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#csgo").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Counter Strike: GO/1.6"), $("#addmember").off().on("click", function() {
        count <= events.csgo && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.csgo && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.csgo && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.csgo && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#nfs").on("click", function() {
    return document.getElementById("addmember").style.display = "none", document.getElementById("delmember").style.display = "none", isSignedUp ? void $(".contact100-form-title span").text("Register For NFS: Most Wanted") : void notSignedUp()
}), $("#fifa").on("click", function() {
    return document.getElementById("addmember").style.display = "none", document.getElementById("delmember").style.display = "none", isSignedUp ? void $(".contact100-form-title span").text("Register For FIFA") : void notSignedUp()
}), $("#bridgemaking").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Bridge Making"), $("#addmember").off().on("click", function() {
        count <= events.bridgemaking && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.bridgemaking && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.bridgemaking && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.bridgemaking && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#armofhercules").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Arm Of Hercules"), $("#addmember").off().on("click", function() {
        count <= events.armofhercules && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.armofhercules && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.armofhercules && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.armofhercules && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#aerostorm").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For AeroStorm"), $("#addmember").off().on("click", function() {
        count <= events.aerostorm && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.aerostorm && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.aerostorm && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.aerostorm && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#uic").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Ureckon Innovation Challenge - UIC"), $("#addmember").off().on("click", function() {
        count <= events.uic && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.uic && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.uic && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.uic && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#urecathon").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Ureck-A-Thon"), $("#addmember").off().on("click", function() {
        count <= events.urecathon && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.urecathon && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.urecathon && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.urecathon && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#getsetsell").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Get Set Sell"), $("#addmember").off().on("click", function() {
        count <= events.getsetsell && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.getsetsell && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.getsetsell && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.getsetsell && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#admaking").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Ad mad"), $("#addmember").off().on("click", function() {
        count <= events.admaking && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.admaking && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.admaking && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.admaking && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#solvero").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Solvero"), $("#addmember").off().on("click", function() {
        count <= events.solvero && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.solvero && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.solvero && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.solvero && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#biotex").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For BioteXpression"), $("#addmember").off().on("click", function() {
        count <= events.biotex && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.biotex && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.biotex && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.biotex && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#healthybites").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For Healthy Bites"), $("#addmember").off().on("click", function() {
        count <= events.solvero && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.healthybites && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.healthybites && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.healthybites && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#cluex").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For ClueX"), $("#addmember").off().on("click", function() {
        count <= events.cluex && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.cluex && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.cluex && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.cluex && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
}), $("#techquiz").on("click", function() {
    return isSignedUp ? ($(".contact100-form-title span").text("Register For ThinkTech"), $("#addmember").off().on("click", function() {
        count <= events.techquiz && (count++, idName = "member" + count, $("#" + idName).slideDown()), count >= 1 && count <= events.techquiz && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), count === events.techquiz && (document.getElementById("addmember").disabled = !0, document.getElementById("delmember").disabled = !1)
    }), void $("#delmember").off().on("click", function() {
        count >= 1 && (idName = "member" + count, $("#" + idName).slideUp(), count--), count >= 1 && count <= events.techquiz && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !1), 1 === count && (document.getElementById("addmember").disabled = !1, document.getElementById("delmember").disabled = !0)
    })) : void notSignedUp()
});
var substringMatcher = function(e) {
    return function(t, d) {
        var n;
        n = [], substrRegex = new RegExp(t, "i"), $.each(e, function(e, t) {
            substrRegex.test(t) && n.push(t)
        }), d(n)
    }
};
$("#the-basics .typeahead").typeahead({
    hint: !1,
    highlight: !0,
    minLength: 1
}, {
    name: "states",
    source: substringMatcher(members)
});