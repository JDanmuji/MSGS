package com.msgs.tripstory.repository;

import com.msgs.msgs.dto.tripstory.StoryComment;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class TripStoryRepository {

    private final EntityManager em;

    public List<StoryComment> findAllStoryCommentsList() {
        return em.createQuery("select storyComment from StoryComment storyComment", StoryComment.class)
                .getResultList();
    }
}
