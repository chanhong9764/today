package com.ssafy.today.global.batch;


import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@EnableBatchProcessing
@Slf4j
public class BatchConfig {
    @Bean
    public Job Job1(JobRepository jobRepository, Step simpleStep1) {
        return new JobBuilder("Job1", jobRepository)
                .start(simpleStep1)
                .build();
    }
    @Bean
    public Step Step1(JobRepository jobRepository, Tasklet Tasklet, PlatformTransactionManager platformTransactionManager){
        return new StepBuilder("Step1", jobRepository)
                .tasklet(Tasklet, platformTransactionManager).build();
    }
    @Bean
    public Tasklet Tasklet(){
        return ((contribution, chunkContext) -> {
            log.info("step1 지납니다~");
            // 알아서 Tasklet1 을 찾아간다
            return RepeatStatus.FINISHED;
        });
    }

}
